/**
 * Created by jason on 2016/10/12.
 */
let CommentBox = React.createClass({displayName: "CommentBox",
    render(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, null), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

// 实例化根组件，启动框架
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);