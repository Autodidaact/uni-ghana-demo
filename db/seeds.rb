# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ "name": "Star Wars" }, { "name": "Lord of the Rings" }])
#   Character.create("name": "Luke", movie: movies.first)
universities = University.create!(
    [
    {
        "name": "University of Ghana",
        "location": "Accra",
        "image_url": "https://3news.com/wp-content/uploads/2022/05/FS4xlTfWUAAallo.jpg",
        "website": "https://www.ug.edu.gh/"
    },
    {
        "name": "Kwame Nkrumah University of Science and Technology",
        "location": "Kumasi",
        "image_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fknustnoticeboard.info%2Fknust-halls-of-residence%2F&psig=AOvVaw1yD4RUw1D0JmjA2hccXqAo&ust=1682428116558000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjUkqjLwv4CFQAAAAAdAAAAABAJ",
        "website": "https://www.knust.edu.gh/"
    },
    {
        "name": "University of Cape Coast",
        "location": "Cape Coast",
        "image_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulse.com.gh%2Fnews%2Flocal%2Funiversity-of-cape-coast-ranked-best-in-ghana-and-1st-in-west-africa%2F2mfqk3c&psig=AOvVaw1ptEKqoXVd9J6PYrqpEtfS&ust=1682428361155000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj1jprMwv4CFQAAAAAdAAAAABAJ",
        "website": "https://www.ucc.edu.gh/"
    },
    {
        "name": "University of Education, Winneba",
        "location": "Winneba",
        "image_url": "https://uew.edu.gh/sites/default/files/winneba-cover.jpg",
        "website": "https://www.uew.edu.gh/"
    },
    {
        "name": "University of Mines and Technology",
        "location": "Tarkwa",
        "image_url": "https://www.myjoyonline.com/wp-content/uploads/2020/12/Commissioning-of-University-of-Mines-and-Technology-4-1024x683.jpeg",
        "website": "https://www.umat.edu.gh/"
    }
]
)

users = User.create!(
    [
    {
        "first_name": "Uni",
        "last_name": "Ghana",
        "email": "admin@unighana.com",
        "password": "unighana"
    }
]
)