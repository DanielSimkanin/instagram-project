export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const photos = [
    {
  id: 1,
  title: "Friendly Dog",
  description: "A happy dog posing for a picture.",
  date: "2024-03-12",
  thumbnail: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400",
  fullsize: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=1200",
  author: {
    name: "Daniel Simkanin",
    username: "daniel.nature",
    image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
    userSince: "2022-01-15",
    channel: "Wild Encounters"
  }
},
    {
      id: 2,
      title: "Eagle in Flight",
      description: "A bald eagle soars in the sky.",
      date: "2024-02-28",
      thumbnail: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400",
      fullsize: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 3,
      title: "Elephant in the Savanna",
      description: "An elephant roams through the African savanna.",
      date: "2024-01-20",
      thumbnail: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400",
      fullsize: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 4,
      title: "Snow Leopard Stare",
      description: "A rare snow leopard pauses on a tree ledge.",
      date: "2024-03-05",
      thumbnail: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400",
      fullsize: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 5,
      title: "Humpback Breach",
      description: "A humpback whale launches itself fully out of the ocean near Alaska.",
      date: "2023-11-14",
      thumbnail: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400",
      fullsize: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 6,
      title: "Fox Kit Curiosity",
      description: "A red fox kit peeks out from its den in a quiet forest meadow.",
      date: "2024-04-01",
      thumbnail: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400",
      fullsize: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 7,
      title: "Grizzly Relaxing",
      description: "A grizzly bear relaxes in a sunny clearing.",
      date: "2023-09-08",
      thumbnail: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=400",
      fullsize: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 8,
      title: "Happy Puppy",
      description: "A happy puppy playing in the grass.",
      date: "2023-10-22",
      thumbnail: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400",
      fullsize: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 9,
      title: "Male Lion",
      description: "A majestic male lion rests under a tree.",
      date: "2024-02-10",
      thumbnail: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400",
      fullsize: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 10,
      title: "Puffin Colony",
      description: "Atlantic puffins nest along the dramatic sea cliffs of Iceland in summer.",
      date: "2023-07-30",
      thumbnail: "https://images.unsplash.com/photo-1590418606746-018840f9eff8?w=400",
      fullsize: "https://images.unsplash.com/photo-1590418606746-018840f9eff8?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 11,
      title: "Cheetah Sprint",
      description: "The world's fastest land animal reaches full speed chasing prey across the savanna.",
      date: "2024-01-05",
      thumbnail: "https://images.unsplash.com/photo-1509955476318-a31698f88b3f?w=400",
      fullsize: "https://images.unsplash.com/photo-1509955476318-a31698f88b3f?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 12,
      title: "Nemo",
      description: "A small clownfish swims among the tentacles of a sea anemone.",
      date: "2023-12-18",
      thumbnail: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400",
      fullsize: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 13,
      title: "Pandas Resting",
      description: "A pair of pandas relax in their bamboo forest habitat.",
      date: "2023-08-14",
      thumbnail: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?w=400",
      fullsize: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 14,
      title: "Polar Bear Waving",
      description: "A polar bear waves its paw at the camera.",
      date: "2023-06-22",
      thumbnail: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400",
      fullsize: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    },
    {
      id: 15,
      title: "Flamingo Stance",
      description: "A flamingo strikes a pose in the pink waters of Lake Nakuru.",
      date: "2024-03-28",
      thumbnail: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=400",
      fullsize: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=1200",
      author: {
        name: "Daniel Simkanin",
        username: "daniel.nature",
        image: "https://images.unsplash.com/photo-1504173010664-32509107de5f?w=150",
        userSince: "2022-01-15",
        channel: "Wild Encounters"
      }
    }
  ];

  res.status(200).json({ photos });
}