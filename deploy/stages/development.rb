# roles
role :app, %w(root@178.128.126.186)

# ssh
set :ssh_options,
    port: 22,
    user: 'root',
    keys: %w(~/.ssh/id_rsa),
    forward_agent: true,
    auth_methods: %w(publickey password)

# server
server '178.128.126.186',
    user: 'root',
    roles: %w(app)