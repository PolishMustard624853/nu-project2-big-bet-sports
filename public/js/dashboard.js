// const updateButtons = document.querySelectorAll(".update")
// for (let i = 0; i < delButtons.length; i++) {
  //   delButtons[i].addEventListener("click", delButtonHandler)
  // }
  // for (let i = 0; i < delButtons.length; i++) {
    //   updateButtons[i].addEventListener("click", UpdateHandler)
    // }
    // const delButtons =  document.querySelectorAll(".delete")
const delButtonHandler = async (event) => {

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/bet/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.bet-list')
  .addEventListener('click', delButtonHandler);
