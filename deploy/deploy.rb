# config valid only for current version of Capistrano
lock '3.10.0'

set :app, 'multiple-web-api'
set :repo_url, 'git@github.com:quando1910/unidev-multiple-web.git'
set :branch, 'master'
set :deploy_to, "/var/www/#{fetch(:app)}"
# set :linked_dirs, %w{.env}
set :linked_files, %w{.env}
set :keep_releases, 5

namespace :deploy do
    task :fetch do
      on roles(:app) do
        execute("cd #{fetch(:deploy_to)}/current && npm install")
      end
    end

    task :build do
      on roles(:app) do
        execute("cd #{fetch(:deploy_to)}/current && npm run build")
      end
    end

    task :start do
      on roles(:app) do
        execute("cd #{fetch(:deploy_to)}/current && DEBUG='*' pm2 start src/index.js --name api")
      end
    end

    task :restart do
      on roles(:app) do
        execute("cd #{fetch(:deploy_to)}/current && DEBUG='*' pm2 restart api --update-env")
      end
    end

    after :publishing, 'deploy:fetch'
    # after :publishing, 'deploy:build'
    after :publishing, 'deploy:start'
end