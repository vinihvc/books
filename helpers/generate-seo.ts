import { BookProps } from '@/components/book'

const generateSeo = (book: BookProps) => {
  return {
    title: `${book.title} ${
      book.authors ? ` - ${book.authors?.join(', ')}` : ''
    }`,
    description: book.description
      ? book.description?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200)
      : '',
    canonical: `https://challenge-books.vercel.app/book/${book.id}`,
    openGraph: {
      url: `https://challenge-books.vercel.app/book/${book.id}`,
      title: `${book.title} ${
        book.authors ? ` - ${book.authors?.join(', ')}` : ''
      }`,
      description: book.description
        ? book.description?.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200)
        : '',
      images: [
        {
          url:
            book.image || 'https://challenge-books.vercel.app/img/no-cover.jpg',
          alt: `${book.title} ${
            book.authors ? ` - ${book.authors?.join(', ')}` : ''
          }`,
        },
      ],
    },
  }
}

export default generateSeo
