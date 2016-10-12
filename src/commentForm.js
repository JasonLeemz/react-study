/**
 * Created by jason on 2016/10/12.
 */
let CommentForm = React.createClass({
    render(){
        return (
            <div className="commentForm">
                CommentForm !!
            </div>
        );
    }
});

// 实例化根组件，启动框架
React.render(
    <CommentForm />,
    document.getElementById('content')
);