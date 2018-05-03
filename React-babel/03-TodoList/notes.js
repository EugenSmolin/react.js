var Note = React.createClass({
	render: function() {
		var bgStyle = { backgroundColor: this.props.color };
		return (
			<div className="note" style={bgStyle}>
				<span className="delete-note" onClick={this.props.onDelete}> x </span>
				{this.props.children}
			</div>
		);
	}
});

var NoteEditor = React.createClass({
	getInitialState: function() {
		return {
			text: ''
		};
	},

	handleTextChange: function(event) {
		this.setState({ text: event.target.value });
	},

	handleNoteAdd: function() {
		var newNote = {
			text: this.state.text,
			color: 'yellow',
			id: Date.now()
		};
		this.props.onNoteAdd(newNote);
		this.setState({ text: '' });
	},

	render: function() {
		return (
			<div className="note-editor">
				<textarea 
					placeholder="Введите примечание здесь..." 
					rows={5} 
					className="textarea"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<button className="add-button" onClick={this.handleNoteAdd}>Добавить</button>
			</div>
		);
	}
});

var NotesGrid = React.createClass({
	componentDidMount: function() {
		var grid = this.refs.grid;
		this.msnry = new Masonry( grid, {
		  itemSelector: '.note',
		  columnWidth: 200,
		  gutter: 10
		});
	},

	componentDidUpdate: function(prevProps) {
		if (this.props.notes.length !== prevProps.notes.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	},

	render: function() {
		var onNoteDelete = this.props.onNoteDelete;
		return (
			<div className="notes-grid" ref="grid"> 
				{
					this.props.notes.map(function(note) {
						return (
							<Note 
								key={note.id} 
								onDelete={onNoteDelete.bind(null, note)}
								color={note.color}
							> 
								{note.text} 
							</Note>
						);
					})
				}
			</div>
		);
	}
});

var NotesApp = React.createClass({
	getInitialState: function() {
		return {
			notes: [
				// {
				// 	id: 0,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsum!",
				// 	color: "#ffd700"
				// },
				// {
				// 	id: 1,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nihil accusantium facilis blanditiis earum ipsa quos beatae recusandae quas rem.",
				// 	color: "#20b2aa"
				// },
				// {
				// 	id: 2,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui, commodi odio odit, eos dolor.",
				// 	color: "#90ee90"
				// },
				// {
				// 	id: 3,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsum!",
				// 	color: "#87cefa"
				// },
				// {
				// 	id: 4,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nihil accusantium facilis blanditiis earum ipsa quos beatae recusandae quas rem.",
				// 	color: "#ffb6c1"
				// },
				// {
				// 	id: 5,
				// 	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui, commodi odio odit, eos dolor.",
				// 	color: "#5f9eao"
				// }
			]
		};
	},

	componentDidMount: function() {
		var localNotes = JSON.parse(localStorage.getItem('notes'));
		if (localNotes) {
			this.setState({ notes: localNotes });
		}
	},

	componentDidUpdate: function() {
		this._updateLocalStorage();
	},

	handleNoteDelete: function(note) {
		var noteId = note.id;
		var newNotes = this.state.notes.filter(function(note) {
			return note.id !== noteId;
		});
		this.setState({ notes: newNotes });
	},

	handleNoteAdd: function(newNote) {
		var newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);
		this.setState({ notes: newNotes });
	},

	render: function() {
		return (
			<div className="notes-app">
				<h2 className="app-header">NotesApp</h2>
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
			</div>
		);
	},

	_updateLocalStorage: function() {
		var notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}
});

ReactDOM.render(
	<NotesApp />,
	document.getElementById('mount-point')
);