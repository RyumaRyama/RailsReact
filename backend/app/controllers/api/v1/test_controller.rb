class Api::V1::TestController < ApplicationController
  def index
    render json: { status: 404, message: "testtest"}
  end
end
