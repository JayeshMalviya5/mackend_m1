// Controller for dummy data
const getDummyData = (req, res) => {
    const dummyData = [
        {
            id: 1,
            name: "John Doe",
            age: 25,
            city: "New York"
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 30,
            city: "Los Angeles"
        },
        {
            id: 3,
            name: "Bob Wilson",
            age: 28,
            city: "Chicago"
        }
    ];

    res.status(200).json({
        success: true,
        data: dummyData
    });
};

module.exports = {
    getDummyData
};