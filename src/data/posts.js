export const posts = [
  {
    id: 1,
    title: "Magna sed adipiscing",
    excerpt: "Lorem ipsum dolor amet nullam consequat etiam feugiat",
    content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    date: "2015-11-01",
    dateFormatted: "November 1, 2015",
    author: "Jane Doe",
    image: "/images/pic01.jpg",
    category: "General",
    likes: 28,
    comments: 128,
    featured: true
  },
  {
    id: 2,
    title: "Ultricies sed magna euismod enim vitae gravida",
    excerpt: "Lorem ipsum dolor amet nullam consequat etiam feugiat",
    content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.",
    date: "2015-10-25",
    dateFormatted: "October 25, 2015",
    author: "Jane Doe",
    image: "/images/pic02.jpg",
    category: "General",
    likes: 28,
    comments: 128,
    featured: false
  },
  {
    id: 3,
    title: "Euismod et accumsan",
    excerpt: "Lorem ipsum dolor amet nullam consequat etiam feugiat",
    content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.",
    date: "2015-10-22",
    dateFormatted: "October 22, 2015",
    author: "Jane Doe",
    image: "/images/pic03.jpg",
    category: "General",
    likes: 28,
    comments: 128,
    featured: false
  }
];

export const getPostById = (id) => {
  return posts.find(post => post.id === parseInt(id));
};

export const getFeaturedPost = () => {
  return posts.find(post => post.featured);
};

export const getRecentPosts = (limit = 10) => {
  return posts.slice(0, limit);
};
