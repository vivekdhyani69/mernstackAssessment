// {
//   "from": "919876543210",
//   "to": "bot",
//   "message": "Hello",
//   "timestamp": ISODate("2025-08-18T12:00:00Z"),
//   "status": "delivered"
// }

// ### 1. MongoDB Aggregation Query
// - Calculates total messages in last 24 hours
// - Finds top 3 users by message count
 
db.messages.aggregate([
  {
    $match: {
      timestamp: {
        $gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    }
  },
  {
    $facet: {
      totalMessages: [
        { $count: "count" }
      ],
      topUsers: [
        {
          $group: {
            _id: "$from",
            messageCount: { $sum: 1 }
          }
        },
        { $sort: { messageCount: -1 } },
        { $limit: 3 }
      ]
    }
  }
]);
