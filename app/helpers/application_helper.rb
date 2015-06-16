module ApplicationHelper
  def smart_nav
    nav = ''

    if @current_user.present? && @current_user.admin?
      nav += '<li>' + link_to('Show Users', users_path) + '</li>'
      nav += '<li>' + link_to('Create Plane', new_airplane_path) + '</li>'
      nav += '<li>' + link_to('Create Flight', new_flight_path)
    end

    if @current_user.present? && session[:user_id]
      nav += '<li>' + link_to("Log out #{@current_user.email}", login_path, :method => :delete ) + '</li>'
    else
      nav += '<li>' +link_to('Sign up', new_user_path) + '</li>'
       nav += '<li>' + link_to('Log in', login_path) + '</li>'
    end

    nav
  end
end
# "<form method='post' action='/login' ><label for='email'>Email: </label><input type='email' name='email'/><label for='password'>Password:</label><input type='password' name='password'/><input type='submit'/> </form>"