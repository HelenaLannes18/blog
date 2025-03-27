import { compareDesc, parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
    .map((blog) => ({
      ...blog,
      formattedDate: format(parseISO(blog.publishedAt), 'dd/MM/yyyy', {
        locale: ptBR,
      }),
    }));
};
