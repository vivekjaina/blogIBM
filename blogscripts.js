const blogPosts = [
  {
    title: 'Exploring Hyderabad - The City of Pearls',
    content: 'Hyderabad, also known as the City of Pearls, is a vibrant metropolis in India with a rich history and diverse culture. The city boasts a mix of modernity and tradition, where ancient landmarks stand tall amidst modern skyscrapers...',
    image: 'hyderabad1.jpg'
  },
  {
    title: 'Taste the Flavors of Hyderabad',
    content: 'Hyderabadi cuisine is a delightful blend of Mughlai, Turkish, and Arabic influences. The famous Hyderabadi Biryani, with its flavorful rice and succulent meat, is a must-try for food enthusiasts...',
    image: 'hyderabad2.jpg'
  },
  {
    title: 'Witness the Charminar - An Iconic Monument',
    content: 'The Charminar, a magnificent monument built in 1591, is one of the most iconic landmarks of Hyderabad. Its four grand arches lead to bustling bazaars, where you can shop for traditional jewelry, textiles, and handicrafts...',
    image: 'hyderabad3.jpg'
  },
  {
    title: 'Experience the Majestic Golconda Fort',
    content: 'Golconda Fort, situated on a granite hill, is a remarkable historical attraction in Hyderabad. Once a fortified citadel, the fort offers breathtaking panoramic views of the city from its topmost pavilion...',
    image: 'hyderabad4.jpg'
  },
  {
    title: 'Stroll Through the Lush KBR National Park',
    content: 'Kasu Brahmananda Reddy National Park, popularly known as KBR Park, is a green oasis amidst the bustling city. It offers a tranquil escape where you can enjoy leisurely walks, spot various bird species, and relish the beauty of nature...',
    image: 'hyderabad5.jpg'
  }
  
];


function displayBlogPosts(posts) {
  const blogSection = document.getElementById('blog');
  blogSection.innerHTML = '';

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);

    blogSection.appendChild(postElement);
  });
}


function handlePagination(pageNumber) {
  const postsPerPage = 3; 
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  displayBlogPosts(paginatedPosts);
}

function createPaginationLinks(totalPages) {
  const paginationSection = document.getElementById('pagination');
  paginationSection.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const linkElement = document.createElement('a');
    linkElement.classList.add('pagination-link');
    linkElement.href = '#';
    linkElement.textContent = i;

    linkElement.addEventListener('click', (event) => {
      event.preventDefault();
      handlePagination(i);
      const activeLink = document.querySelector('.pagination-link.active');
      if (activeLink) activeLink.classList.remove('active');
      linkElement.classList.add('active');
    });

    paginationSection.appendChild(linkElement);
  }
}


handlePagination(1);


const totalPages = Math.ceil(blogPosts.length / 3); 
createPaginationLinks(totalPages);

document.getElementById('subscribe-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  alert(`Thank you for subscribing! You will receive updates at ${email}.`);
  document.getElementById('email-input').value = '';
});