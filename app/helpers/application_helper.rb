module ApplicationHelper
  def smart_nav
    nav = ''

    if @current_user.present? && @current_user.admin?
      nav += '<li>' + link_to('Show Users', users_path) + '</li>'
    end

    if @current_user.present?
      nav += '<li>' + link_to("Log out #{@current_user.email}", login_path, :method => :delete ) + '</li>'
    else
      nav += '<li>' +link_to('Sign up', new_user_path) + '</li>'
      nav += "<form method='post' action='/login' ><label for='email'>Email: </label><input type='email' name='email'/><label for='password'>Password:</label><input type='password' name='password'/><input type='submit'/>
      </form>"

    end
    nav
  end
end
# 