const submitForm = document.getElementById('tweetForm');
const newFormHandler = async (event) => {
event.preventDefault();
const title = document.querySelector('#post-title').value.trim();
const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#update-title').value.trim();
  const content = document.querySelector('#update-content').value.trim();
  const id = document.querySelector('#update-id').value.trim();

  if (title && content && id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};


submitForm.addEventListener('submit', newFormHandler);
document.querySelector('.post-list').addEventListener('click', delButtonHandler);
document.getElementById('updateForm').addEventListener('submit', updateFormHandler);

