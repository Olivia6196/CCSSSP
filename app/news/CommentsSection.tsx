import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Comment } from "@/types/post";

export default function CommentsSection({ comments }: { comments: Comment[] }) {
  return (
    <div className="mt-16 max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
        Comments 
        <span className="text-base font-normal text-gray-500">({comments.length})</span>
      </h2>

      <div className="space-y-8">
        {comments.map((comment, index) => {
          const commentDate = new Date(comment.user.date);

          return (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={comment.user.image || "/images/logo.png"}
                      alt={comment.user.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Comment Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {comment.user.name}
                    </h4>
                    <time className="text-sm text-gray-500 whitespace-nowrap">
                      {formatDistanceToNow(commentDate, { addSuffix: true })}
                    </time>
                  </div>

                  <p className="mt-3 text-[17px] leading-relaxed text-gray-700">
                    {comment.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comment Form */}
      <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6">
        <h3 className="font-medium text-lg mb-4">Leave a Comment</h3>
        
        <textarea
          rows={5}
          className="w-full rounded-xl border border-gray-200 p-4 focus:outline-none focus:border-[#003629] focus:ring-1 focus:ring-[#003629] resize-y min-h-30"
          placeholder="Share your thoughts about this event..."
        />

        <div className="flex justify-end mt-4">
          <button className="bg-[#003629] hover:bg-[#00291f] text-white px-8 py-3 rounded-full font-medium transition-colors">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}