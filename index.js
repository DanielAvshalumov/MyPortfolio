const submitTask = document.getElementById('submit-task');
const inquiryText = document.getElementById('inquiry-text');
const pendingContainer = document.getElementById('pending-container');
const cardHeader = document.getElementById('card-header');
const completedList = document.getElementById('completed');
const dueDate = document.getElementById('due-date');
const urgencyScale = document.getElementById('urgency');
const createPost = document.getElementById('card');

let offset = 0;
let inquiryDescription = ""

inquiryText.addEventListener('input', (e) => {
    inquiryDescription = e.target.value;
})

submitTask.addEventListener('click', (e) => {
    inquiryText.value = "";

    const postIt = createPostIt(inquiryDescription);
    
    pendingContainer.appendChild(postIt);

})

urgencyScale.addEventListener('input', (e) => {
    offset = e.target.value*2.25;
    createPost.style = `background-color: rgb(${offset},0,${225-offset});`
})

function createPostIt(text) {
    const postIt = document.createElement('div');
    postIt.classList.add("align-items-center", "rounded", "card", "d-flex", "flex-column", "mb-3");
    postIt.style = `background-color: rgb(${offset},0,${225-offset});`

    const pendingText = document.createElement('div');
    pendingText.classList.add('card-body', 'd-flex', 'align-items-center', 'text-wrap');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('d-flex', 'align-items-center');

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('d-flex', 'align-items-center');

    const h3 = document.createElement('h3');
    h3.classList.add("card-header");
    h3.innerHTML = "// TODO:";

    const h5 = document.createElement('h5');
    h5.innerHTML = dueDate.value;
    const h4 = document.createElement('h4');
    h4.classList.add('card-title');
    h4.innerHTML = 'Due by:';
    h4.style = 'margin-right: 8px;';

    const p = document.createElement('p');
    p.classList.add('bg-white', 'p-3', 'rounded', 'mx-3');
    p.innerHTML = text;
    p.style = "max-width: 300px;"

    const checkbox = document.createElement('input');
    
    checkbox.classList.add('form-check-input', 'mb-1');
    checkbox.type = "checkbox";
    checkbox.id = "completedCheck";

    const checkLabel = document.createElement('h6');
    checkLabel.classList.add('form-check-label', 'mb-0');
    checkLabel.htmlFor = "completedCheck";
    checkLabel.innerHTML = "Completed";
    checkLabel.style = "margin-left: 6px;"

    cardHeader.appendChild(h3);
    cardHeader.appendChild(checkbox);
    cardHeader.appendChild(checkLabel);

    deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('btn', 'bg-primary');
    
    
    pendingText.appendChild(p);
    pendingText.appendChild(deleteButton);

    dateContainer.appendChild(h4);
    dateContainer.appendChild(h5);

    postIt.appendChild(cardHeader);
    postIt.appendChild(dateContainer);
    postIt.append(pendingText);

    deleteButton.addEventListener('click', (e) => {
        postIt.remove();
    })
    // Changes the task from pending to complete
    checkbox.addEventListener('click', (e) => {
        const checked = e.target.checked;
        if(checked) {
            completedList.appendChild(postIt);
            postIt.classList.add('bg-success');
        } else {
            pendingContainer.appendChild(postIt);
            postIt.classList.remove('bg-success');
        }
    })

    return postIt;
}

