FactoryBot.define do
  factory :user do
    email { 'john@promatch.com' }
    password  { 'John.0007' }
    password_confirmation  { 'John.0007' }
  end
end
