import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient ({
    projectId: owgpnfrr,
    dataset: 'production',
    apiVersion: '2022-08-10',
    useCdn: true,
    token: sk4QzkPacGt1MbQJgnUwmEKdew3YNYIK4lpqUS6jK68f97jVpqFP8AISrWoBOxoTD1BhlmKkH791GLMAfwwQ7L2dy32iSzLJyDeTUJbsTboALoNgdKzEqgm9BaAdhZaBpMWCs5IWDoOzAfEwyJwaR2YSUQbqkwBRVe7kSM67E3AVI9PflhCd,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);