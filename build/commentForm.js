/**
 * Created by jason on 2016/10/12.
 */
let CommentForm = React.createClass({displayName: "CommentForm",
    render(){
        return (
            React.createElement("div", {className: "commentForm"}, 
                "CommentForm !!"
            )
        );
    }
});

// 实例化根组件，启动框架
React.render(
    React.createElement(CommentForm, null),
    document.getElementById('content')
);