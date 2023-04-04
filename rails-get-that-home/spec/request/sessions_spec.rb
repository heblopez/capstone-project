require "rails_helper"

describe "Sessions User", type: :request do
  it "http ok status code" do
    user = User.create(email: "testino@mail.com", password: "123456")
    post "/login", params: { email: user.email, password: user.password }
    expect(response).to have_http_status(:ok)
  end
end