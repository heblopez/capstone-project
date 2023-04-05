require "rails_helper"

RSpec.describe "Health Check Endpoint", type: :request do
  describe "GET /health" do
    before { get "/health" }
    
    it "should return OK" do
      payload = JSON.parse(response.body)
      p payload
      expect(payload["API"]).to eq("OK")
    end

    it "should return a JSON" do
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it "should return status code 200" do
      expect(response).to have_http_status(200)
    end
  end
end

RSpec.describe "Sessions User", type: :request do
  it "New user registration" do
    user = User.create(email: "testino@mail.com", password: "123456")
    post "/login", params: { email: user.email, password: user.password }
    expect(response).to have_http_status(:ok)
  end
end