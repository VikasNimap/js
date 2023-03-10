const https = require('https');
const querystring = require('querystring');

// exports.users = async(req,res)=>{
// 	let response = null;
// 	const request = async () => {
// 		const path= '/v1/checkouts'
// 		const data = querystring.stringify({
// 			'entityId': req.params.id,
// 			'amount':req.body.amount,
// 			'currency': req.body.currency,
// 			'paymentType':'DB'
// 		});
// 		const options = {
// 			port: 443,
// 			host: 'eu-test.oppwa.com',
// 			path: path,
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 				'Content-Length': data.length,
// 				'Authorization': req.header('Authorization')
// 			}
// 		};
// 		return new Promise((resolve, reject) => {
// 			const postRequest = https.request(options, function(res) {
// 				const buf = [];
// 				res.on('data', chunk => {
// 					buf.push(Buffer.from(chunk));
// 				});
// 				res.on('end', () => {
// 					const jsonString = Buffer.concat(buf).toString('utf8');
// 					response = jsonString
// 					try {
// 						resolve(JSON.parse(response));
// 					} catch (error) {
// 						reject(error);
// 					}
// 				});
// 			});
// 			postRequest.on('error', reject);
// 			postRequest.write(data);
// 			postRequest.end();
// 		});
// 	};
// 	request().then(console.log).catch(console.error);
// 	res.send({result:response})
// }

exports.users = async (req, res) => {
	let response = null;
	const path = '/v1/checkouts'
	const data = querystring.stringify({
		'entityId': req.params.id,
		'amount': req.body.amount,
		'currency': req.body.currency,
		'paymentType': 'DB'
	});
	const options = {
		port: 443,
		host: 'eu-test.oppwa.com',
		path: path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length,
			'Authorization': req.header('Authorization')
		}
	};
	function data1() {
		return new Promise((resolve, reject) => {
			const postRequest = https.request(options, function (res) {
				const buf = [];
				res.on('data', chunk => {
					buf.push(Buffer.from(chunk));
				});
				res.on('end', () => {
					const jsonString = Buffer.concat(buf).toString('utf8');
					response = jsonString
					try {
						resolve(JSON.parse(response));
					} catch (error) {
						reject(error);
					}
				});
			});
			postRequest.on('error', reject);
			postRequest.write(data);
			postRequest.end();

		})
	}
	let response1 = await data1();
	res.send({ result: response1 })

}

exports.payment = async (req, res) => {
	let response = null;
	const request = async () => {
		var path = `/v1/checkouts/${req.params.id}/payment`;
		path += `?entityId=${req.query.entityId}`;
		const options = {
			port: 443,
			host: 'eu-test.oppwa.com',
			path: path,
			method: 'GET',
			headers: {
				'Authorization': req.header('Authorization')
			}
		};
		return new Promise((resolve, reject) => {
			const postRequest = https.request(options, function (res) {
				const buf = [];
				res.on('data', chunk => {
					buf.push(Buffer.from(chunk));
				});
				res.on('end', () => {
					const jsonString = Buffer.concat(buf).toString('utf8');
					response = jsonString
					try {
						resolve(JSON.parse(jsonString));
					} catch (error) {
						reject(error);
					}
				});
			});
			postRequest.on('error', reject);
			postRequest.end();
		});
	};

	request().then((result) => res.send({ result })).catch(console.error);
}
// module.exports = {request}
