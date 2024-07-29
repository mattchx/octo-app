'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectLink } from '@/db/schema/links';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { deleteLink } from "@/actions"; // Ensure this import path is correct
import { useFormState } from "react-dom";
import { useEffect } from "react";
// import { toast } from "sonner"; // Assuming you're using Sonner for toasts

const initialState = {
  message: '',
  status: '',
};

export function LinkList({ links: initialLinks }: { links: Array<SelectLink> | undefined }) {
  const [state, formAction] = useFormState(deleteLink, initialState);

  useEffect(() => {
    // if (state.status === 'success') {
    //   toast.success('Link deleted successfully');
    // } else if (state.status === 'error') {
    //   toast.error(state.message || 'Failed to delete link');
    // }
  }, [state]);

  return (
    <div className="md:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Uploaded Links</CardTitle>
        </CardHeader>
        <CardContent>
          {!initialLinks || initialLinks.length === 0 ? (
            <p className="text-center text-gray-500">Add links to see them here</p>
          ) : (
            <ul className="space-y-4">
              {initialLinks.map((link) => (
                <li key={link.id} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      {link.title && <h3 className="font-semibold text-lg mb-1">{link.title}</h3>}
                      <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{link.url}</a>
                      {link.description && (
                        <p className="text-sm text-gray-600 mt-2">
                          {link.description.length > 100 ? `${link.description.slice(0, 100)}...` : link.description}
                        </p>
                      )}
                    </div>
                    <form action={formAction}>
                      <input type="hidden" name="id" value={link.id} />
                      <Button
                        type="submit"
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500 ml-2"
                      >
                        <Trash2 size={20} />
                      </Button>
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}