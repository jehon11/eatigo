# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TimeSlot.destroy_all
Restaurant.destroy_all
Cuisine.destroy_all
User.destroy_all

User.create!(email: "jeremy@eatigo.com", name: "jeremy", password: "testtest")
User.create!(email: "maya@eatigo.com", name: "maya", password: "testtest")

Cuisine.create!(name: "Italian")
Cuisine.create!(name: "German")
Cuisine.create!(name: "Chinese")
Cuisine.create!(name: "Japanese")
Cuisine.create!(name: "Indian")
Cuisine.create!(name: "Korean")
Cuisine.create!(name: "French")

Restaurant.create!(name: "Mcdonalds", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 50, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Burger King", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 50, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Mos Burger", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 40, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Shake Shack", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 40, allowed_table_sizes: [2, 4, 6], booking_window: 7)

Restaurant.all.each do |restaurant|
  d = Time.now.beginning_of_hour
  d -= 1440.minutes
  (1..200).each do |i|
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
  end
  puts "----------------"
end