require "rails_helper"

describe "User", type: :request do
  it "create" do
    post "/users", params: { user: { name: "probino", email: "probino@mail.com", password: "123456"} }
    expect(response).to have_http_status(:created)
  end
end