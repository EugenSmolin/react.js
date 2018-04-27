import React, {Component} from 'react';

class Article extends Component {
   constructor(props) {
      super(props);
      this.state = {
         //isOpen: true
         isOpen: props.defaultOpen
      }
   }

   componentWillReceiveProps(nextProps) {
      //console.log('will receive props');
      if (nextProps.defaultOpen !== this.props.defaultOpen) {
         this.setState({
            isOpen: nextProps.defaultOpen
         })
      }
   }

   shouldComponentUpdate(nextProps,nextState) {
      return this.state.isOpen !== nextState.isOpen
   }

   componentWillUpdate() {
      console.log('will update');
   }

   render() {
      const {article} = this.props;
      const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
      return (
         <div className="card">
            <div className="card-header">
               <h2>
                  {article.title}
                  <button className="btn btn-primary float-right" onClick={this.handleClick}>
                     {this.state.isOpen ? 'close' : 'open'}
                  </button>
               </h2>
            </div>
            <div className="card-body">
               <h6 className="card-subtitle text-muted">
                  creation date: {(new Date(article.date)).toDateString()}
               </h6>
               {body}
            </div>
         </div>
      )
   }

   handleClick = () => {
      //console.log('clicked');
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
}

export default Article;