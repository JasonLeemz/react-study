/**
 * Created by jason on 2016/10/12.
 */
let CommentList = React.createClass({
    render(){
        return (
            <div className="commentList">
                <Comment author="JasonLee">
                    This is a *JasonLee* comment1
                </Comment>
                <Comment author="Luyu">
                    This is a *Luyu* comment2
                </Comment>
            </div>
        );
    }
});

// 实例化根组件，启动框架
React.render(
    <CommentList />,
    document.getElementById('content')
);