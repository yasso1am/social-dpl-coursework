categories = ['Games', 'Fitness', 'Money', 'Lifestyle', 'Entertainment', 'Sports', 'Programming', 'Relationships']

100.times do
  Post.create(
    author: Faker::TheFreshPrinceOfBelAir.character,
    body: Faker::Hipster.paragraphs(3),
    category: categories.sample,
    title: Faker::Hipster.words(3).join(' ')
  )
end
