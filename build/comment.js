/**
 * Created by jason on 2016/10/12.
 */

let converter = new Showdown.converter();
let Comment = React.createClass({displayName: "Comment",
    render(){
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                     this.props.author
                ), 
                 converter.makeHtml(this.props.children.toString()) 
                /*<span dangerouslySetInnerHTML={{"{{"}}__html: rawMarkup}} />*/
            )
        );
    }
});

// 实例化根组件，启动框架
React.render(
    React.createElement(Comment, null),
    document.getElementById('content')
);