/**
 * Created by jason on 2016/10/12.
 */
let CommentList = React.createClass({displayName: "CommentList",
    render(){
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "JasonLee"}, 
                    "This is a *JasonLee* comment1"
                ), 
                React.createElement(Comment, {author: "Luyu"}, 
                    "This is a *Luyu* comment2"
                )
            )
        );
    }
});

// 实例化根组件，启动框架
React.render(
    React.createElement(CommentList, null),
    document.getElementById('content')
);