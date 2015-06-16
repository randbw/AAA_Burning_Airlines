class SessionController < ApplicationController

def new
end

def create

  user = User.find_by :email => params[:email]
  if user.present? && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect_to root_path
  else
    flash[:notice] = "Invaild information."
    redirect_to login_path
  end
end
 def destroy
  session[:user_id] = nil
  redirect_to root_path
 end

 private 
 def session_params
  params.require(:user, :password)
 end
end