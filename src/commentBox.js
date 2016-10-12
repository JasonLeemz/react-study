/**
 * Created by jason on 2016/10/12.
 */
let CommentBox = React.createClass({
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

// 实例化根组件，启动框架
React.render(
    <CommentBox />,
    document.getElementById('content')
);