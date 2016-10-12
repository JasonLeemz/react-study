/**
 * Created by jason on 2016/10/12.
 */

let converter = new Showdown.converter();
let Comment = React.createClass({
    render(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    { this.props.author }
                </h2>
                { converter.makeHtml(this.props.children.toString()) }
                {/*<span dangerouslySetInnerHTML={{"{{"}}__html: rawMarkup}} />*/}
            </div>
        );
    }
});

// 实例化根组件，启动框架
React.render(
    <Comment />,
    document.getElementById('content')
);