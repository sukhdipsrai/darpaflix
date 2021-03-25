class User < ApplicationRecord
    validates :email, uniqueness: true, presence: true # email validation, database or frontend?
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true, uniqueness: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :my_lists
    has_many :movies, through: :my_lists

    def password= (input_pass)
        @password = input_pass
        self.password_digest = BCrypt::Password.create(input_pass)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password_is?(pass)
        BCrypt::Password.new(self.password_digest).is_password?(pass)
    end

    def self.find_by_credentials(user,pass)
        user = User.find_by(email: user)
        if user
            return user if user.password_is?(pass)
        else
            return nil
        end
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end