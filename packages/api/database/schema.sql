CREATE TABLE users (
    id TEXT NOT NULL PRIMARY KEY
);

CREATE TABLE sessions (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);