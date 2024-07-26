
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InsertLink, SelectLink } from '@/db/schema/links';

export async function LinkList({ links }: { links: Array<SelectLink> | undefined }) {
  return (
    <div className="md:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Uploaded Links</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Input placeholder="Search links" className="mb-4" /> */}
          {!links ?
            <p>Add links to see them here</p>
          :
            <ul className="space-y-2">
              {links && links?.map((link, index) => (
                <li key={index} className="border-b pb-2">
                  {link.title && <p className="text-sm">{link.title}</p>}
                  <a className="font-medium hover:underline">{link.url}</a>
                  {link.description && <p className="text-sm">{link.description.slice(0, 50)}...</p>}
                </li>
              ))}
            </ul>
          }
        </CardContent>
      </Card>
    </div>)
}