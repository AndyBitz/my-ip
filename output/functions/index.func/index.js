export default function index(request, _event) {
    return new Response(JSON.stringify({
        ip: request.headers.get('x-forwarded-for'),
        country: request.headers.get('X-Vercel-IP-Country'),
        city: request.headers.get('X-Vercel-IP-City'),
    }, null, 2), {
        headers: {
            'content-type': 'application/json',
        }
    });
}
