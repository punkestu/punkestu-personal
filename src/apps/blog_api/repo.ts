import { Blog } from "./model";

const data: Blog[] = [
    {
        slug: "who-am-i",
        title: "Who am I",
        postAt: "2021-06-09",
        thumbnail: "/public/bio.png",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita fugit nam aliquam quisquam officiis excepturi, aspernatur ex tempora minima suscipit maiores nemo dolores earum deserunt ullam natus. Dolorum officiis totam voluptate enim adipisci beatae facere architecto dolores eligendi quae ipsum perferendis consectetur repudiandae suscipit, quam necessitatibus vitae mollitia corrupti, ducimus ex alias voluptatem dicta placeat! Saepe aperiam maiores quis nam dolor, obcaecati atque quae accusamus! Odit magnam soluta adipisci ipsam dolor odio mollitia assumenda quaerat quam illum, voluptatem consequatur iste maiores labore cum nisi velit voluptatum eius? Dolor eum magnam eius provident quisquam at. Molestiae hic quidem ducimus numquam.",
    },
];

export function getBlogs(): Blog[] {
    return data;
}

export function getBlog(slug: string): Blog | undefined {
    return data.find((blog) => blog.slug === slug);
}
