function addComment() {
    var commentText = document.getElementById('comment-text').value.trim();
    if (commentText !== '') {
      var commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
      document.getElementById('comments-list').appendChild(commentElement);
      document.getElementById('comment-text').value = '';
  
      // Cambiar tamaño del fondo
      var container = document.getElementById('comments-container');
      container.classList.add('expanded');
      setTimeout(function() {
        container.classList.remove('expanded');
      }, 300);
    }
  }

  
  