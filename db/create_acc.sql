insert into account (
    acc_email,
    acc_hash
) values(
    $1,
    $2
)
returning acc_id, acc_email;

-- returning clause lets you return data inside an insert request