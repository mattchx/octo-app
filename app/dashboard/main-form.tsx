"use client";

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updateLinks } from "@/actions"
import { InsertLink } from '@/db/schema/links';

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Add
    </Button>
  );
}


export function MainForm() {
  const [state, formAction] = useFormState(updateLinks, initialState);
  const [links, setLinks] = useState([{ title: "", description: "", url: "" }]);

  const handleLinkChange = (index: number, field: keyof InsertLink, value: string) => {
    const newLinks = [...links]
    newLinks[index][field as keyof typeof newLinks[typeof index]] = value;
    setLinks(newLinks)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Add your links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            {/* <div className="space-y-2">
              <Label htmlFor="avatarUrl">Avatar URL</Label>
              <Input id="avatarUrl" name="avatarUrl" placeholder="https://example.com/avatar.jpg" type="url" />
            </div> */}

            <div className="space-y-4">
              {links.map((link, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-2">
                    <Input
                      name="title"
                      placeholder="Link Title"
                      value={link.title}
                      onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                      required
                    />
                    <Input
                      name="description"
                      placeholder="Link Description"
                      value={link.description}
                      onChange={(e) => handleLinkChange(index, 'description', e.target.value)}
                    // required
                    />
                    <Input
                      name="url"
                      placeholder="URL"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                      required
                    />
                    {/* <Button type="button" variant="destructive" onClick={() => removeLink(index)}>
                      Remove Link
                    </Button> */}
                  </div>
                </Card>
              ))}
              {/* <Button type="button" onClick={addLink}>Add Link</Button> */}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}