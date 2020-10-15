const cassandra = require('cassandra-driver')

const cassandradb = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'people_also_viewed'
})