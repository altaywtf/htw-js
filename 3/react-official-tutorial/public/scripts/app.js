/* Components */

// Single Comment View
var Comment = React.createClass({
  rawMarkup: function () {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
      return { __html: rawMarkup}
  },

  render() {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
})

// Comment List View
var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
        )
    })
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
})

// Comment Form
var CommentForm = React.createClass({
  render() {
    return (
      <div className='commentForm'>
        Form Here!
      </div>
    )
  }
})

// CommentBox, the whole thing that we're trying to build...
var CommentBox = React.createClass({

  loadCommentsFromServer: function() {
      $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(this.props.url, status, err.toString())
      }.bind(this)
    })
  },

  getInitialState() {
    return {data: []}
  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },

  render() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    )
  }
})


/* Rendering */
ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval="{2000}"/>,
    document.getElementById('content')
  )