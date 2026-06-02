/** A comment as returned to the public (no email, no ip_hash). */
export interface PublicComment {
  id: string;
  postSlug: string;
  parentId: string | null;
  authorName: string;
  body: string;
  isDeleted: boolean;
  createdAt: string;
}

/** A top-level comment with its (one level of) replies attached. */
export interface CommentThread extends PublicComment {
  replies: PublicComment[];
}
