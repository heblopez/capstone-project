class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :password_digest
      t.string :token
      t.integer :role

      t.timestamps
    end
    add_index :users, :token, unique: true
  end
end
