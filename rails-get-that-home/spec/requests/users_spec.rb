require "rails_helper"

describe "User", type: :request do

  it "create" do
    post "/users", params: { name: "probino", email: "probino@mail.com", password: "123456" }
    expect(response).to have_http_status(:created)
  end

  it "show" do
    user = User.create(name: "probino", email: "probino@mail.com", password: "123456")
    post "/users", params: { name: user.name, email: user.email , password: user.password }
    token = JSON.parse(response.body)["token"]
    get "/users/#{user.id}", headers: { "Authorization" => "Token token=#{token}" }

    expect(response).to have_http_status(:ok)
  end

  it "update" do
    user = User.create(name: "probino", email: "probino@mail.com", password: "123456")
    post "/users", params: { name: "probino", email: user.email , password: user.password }
    token = JSON.parse(response.body)["token"]
    patch "/users/#{user.id}", params: { name: "testino" }, headers: { "Authorization" => "Token token=#{token}" }
    expect(response).to have_http_status(:ok)
  end

end
