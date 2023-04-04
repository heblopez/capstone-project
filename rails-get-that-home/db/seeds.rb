puts "Start DB seed"
user_test = User.create(name: "testino", email: "testino@mail.com", password: "123456")
puts "End DB seed"