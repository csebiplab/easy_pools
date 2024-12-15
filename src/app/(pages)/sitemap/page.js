import React from 'react';

const getSitemap = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/siteMap`, {
        cache: "no-store",
    });
    const { data } = await response.json();

    return data;
}

const page = async () => {
    const data = await getSitemap();

    return (
      <div className="container min-h-screen">
        <h4 className="pt-12 pb-3">XML Sitemap</h4>
        <p>This XML Sitemap Index file contains {data?.length} sitemaps.</p>
        <table className="w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Change Frequency</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Priority</th>
              <th className="border px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{item.changefreq}</td>
                <td className="border px-4 py-2">
                  <a href={item.loc} target="_blank" rel="noopener noreferrer">
                    {item.loc}
                  </a>
                </td>
                <td className="border px-4 py-2">{item.priority}</td>
                <td className="border px-4 py-2">
                  {new Date(item.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default page;
