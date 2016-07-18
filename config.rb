# Change Compass configuration
compass_config do |config|
  config.add_import_path "bower_components/foundation-sites/scss/"
  config.output_style = :compact

  # Set this to the root of your project when deployed:
  config.http_path = "/"
  config.css_dir = "stylesheets"
  config.sass_dir = "stylesheets"
  config.images_dir = "images"
  config.javascripts_dir = "javascripts"
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

activate :autoprefixer
activate :livereload

configure :development do
  set :environment, 'development'
end

activate :directory_indexes
configure :build do
  ignore 'shapes/*'
  set :environment, 'production'
end

after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

# Use the correct vendor prefixes for foundation
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
end

ignore "bower_components/*"

# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.host   = 'marsman.marsbased.com'
#   deploy.path   = '/home/deploy/apps/marsman
#   deploy.user  = 'deploy'
#   deploy.flags = '-avzp --chmod=+r'
# end

activate :email do |email|
  email.user = 'postmaster@mg.marsbased.com'
  email.password = 'smtp_pass'
  email.emails_path= 'emails'
  email.to_email = 'your.email@whatever.com'
  email.from_email = 'mailer@mg.marsbased.com'
  email.port = 587
  email.domain = 'mg.marsbased.com'
  email.address = 'smtp.mailgun.org'
end
