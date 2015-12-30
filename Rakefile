require 'html/proofer'

# rake test
desc "build and test website"

task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./build", {:href_ignore=> ['http://localhost:4000'], :verbose => true}).run
end
